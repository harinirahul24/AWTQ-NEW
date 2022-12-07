const path = require("path");
const axios = require('axios');
const config = require("./data/SiteConfig");

const getActiveContent = () => {
  return axios.get(`${config.serviceUrl}/content-subscription/active-contents?subscriptionTypeId=01&contentLanguage=English`)
}

const getContentByYear = () => {
  return axios.get(`${config.serviceUrl}/content-subscription/archived-content?language=English&subscriptionTypeId=01`)
}


exports.createPages = async ({ graphql, actions, reporter }) => {

  const { createPage } = actions;
  try {
    const data = await getContentByYear();
    const { data: archivesContent } = data;
    if (!archivesContent.error) {

      //archive page 
      createPage({
        path: `/archive`,
        component: path.resolve('./src/templates/archives.js'),
        context: {
          content: { ...archivesContent.data },
          mobileData: {
            isMobileMode: false,
            showArchiveBtn: false
          }
        }
      });

      // generating all a word, a thought and a question pages
      Object.keys(archivesContent.data).forEach(month => {
        for (const data of archivesContent.data[month]) {
          console.log("<><<><", month)
          createPage({
            path: `/${data.contentUploadedDate.replace(/\//g, "-")}`,
            component: path.resolve('./src/templates/individual-post.js'),
            context: {
              content: data,
              mobileData: {
                isMobileMode: false,
                showArchiveBtn: false
              }
            }
          });

          createPage({
            path: `/m/${data.contentUploadedDate.replace(/\//g, "-")}`,
            component: path.resolve('./src/templates/individual-post.js'),
            context: {
              content: data,
              mobileData: {
                isMobileMode: true,
                showArchiveBtn: false,
                socialSharing: true
              }
            }
          });

        }
      })

    } else {
      console.log('<-----ARCHIVES CONTETN ERROR----->', archivesContent)
    }

  } catch (error) {
    console.log('<-----ARCHIVES CONTETN ERROR----->', err)

  }
}


exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  //active content to graphql 
  let data;
  try {
    ({ data: response } = await getActiveContent());
    console.log('<------------------>', response)
  }
  catch (err) {
    console.log(err)
  }
  const myData = { ...response.data }
  const nodeContent = JSON.stringify(myData)
  const nodeMeta = {
    id: createNodeId(`my-data-${myData.key}`),
    parent: null,
    children: [],
    internal: {
      type: `MyNodeType`,
      mediaType: `text/html`,
      content: nodeContent,
      contentDigest: createContentDigest(myData),
    },
  }
  const node = Object.assign({}, myData, nodeMeta)
  createNode(node)
}


