$(document).ready(function(){
    console.log('doc ready');
    var socket = io('https://jiramonitor.azurewebsites.net/');
      socket.on('newissue', function (issue) {
        console.log("%o", issue);
        refreshUI(issue);
      });
});

function refreshUI(issue) {
    var issueKey="<p>"+issue.key+"</p>";
    var filenames = "<ul>";
    issue.filenames.forEach(filename => {
        filenames+="<li>"+filename+"</li>";
    });
    filenames+="</ul>";
    var issueHtml = "<li>"+issueKey+filenames+"</li>";
    $("#issuelist").append(issueHtml);
}

