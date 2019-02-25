$(document).ready(function(){
    console.log('doc ready');
    var localhost = "http://localhost:3000";
    var cloud = "https://jiramonitor.azurewebsites.net/";
    var socket = io(cloud);
      socket.on('newissue', function (issue) {
        console.log("%o", issue);
        refreshUI(issue);
      });
});

function refreshUI(issue) {
    var issueKey="<td>"+issue.key+"</td>";
    var issueTitle="<td>"+issue.summary+"</td>";
    var filenames = "<td><ol>";
    issue.filenames.forEach(filename => {
        filenames+="<li>"+filename+"</li>";
    });
    filenames+="</ol></td>";
    var issueHtml = "<tr>"+issueKey+issueTitle+filenames+"</tr>";
    $("#issuelist").append(issueHtml);
}

