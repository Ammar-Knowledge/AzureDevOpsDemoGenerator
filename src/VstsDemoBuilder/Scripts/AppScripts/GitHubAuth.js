﻿$(document).ready(function () {
    $('#githubAuth').click(function () {
        checkSession();
        var reqorigon = window.location.origin;
        var mywindown = window.open(reqorigon + "/GitHub/GitOauth", "Azure DevOps Demo Generator", "width=500,height=500",
            "width=300,height=400,scrollbars=yes");
    });
    $('input[id="gitHubCheckbox"]').click(function () {
        if ($(this).prop("checked") === true) {
            $('#btnSubmit').prop('disabled', true).removeClass('btn-primary');
            $('#gitHubAuthDiv').removeClass('d-none');
        }
        if ($(this).prop("checked") === false) {
            $('#btnSubmit').prop('disabled', false).addClass('btn-primary');
            $('#gitHubAuthDiv').addClass('d-none');
        }
    });
});

function checkSession() {
    $.ajax({
        url: '../Environment/CheckSession',
        type: "GET",
        async: false,
        cache: false,
        success: function (res) {
            console.log("calling " + res);
            if (res !== "") {
                $('input[id="gitHubCheckbox"]').prop('checked', true).prop('disabled', true);
                $('#githubAuth').removeClass('btn-primary').prop('disabled', true);
                $('#btnSubmit').prop('disabled', false).addClass('btn-primary');
            }
            else {
                window.setTimeout("checkSession()", 500);
                //$('input[id="gitHubCheckbox"]').prop('checked', false).prop('disabled', false);
                //$('#gitHubAuthDiv').addClass('d-none');
                //$('#githubAuth').addClass('btn-primary').prop('disabled', false);
            }
        },
        error: function (er) {
        }
    });
}