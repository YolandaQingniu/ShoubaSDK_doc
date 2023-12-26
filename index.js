var ghpages = require("gh-pages");

ghpages.publish(
  "_book",
  {
    branch: "main",
    repo: "https://github.com/YolandaQingniu/ShoubaSDK_doc.git"
  },
  function(err) {
    console.log("github更新" + err);
  }
);

// ghpages.publish(
//   "_book",
//   {
//     branch: "master",
//     repo: "https://gitee.com/yolandaqingniu/sdk-doc.git"
//   },
//   function(err) {
//     console.log("gitee更新" + err);
//   }
// );
