(function() {
  document.addEventListener('spot-im-current-user-sent-message-succeed', function(event) {
    if (window.snowplow) {
      window.snowplow('trackStructEvent', {
        category: 'Comments',
        action: 'Comment Submitted',
        property: event.detail.message_type,
      });
    }
  });
  document.addEventListener('spot-im-show-more-comments-clicked', function(event) {
    if (window.snowplow) {
      window.snowplow('trackStructEvent', {
        category: 'Comments',
        action: 'Show More Comments Clicked',
      });
    }
  });
  document.addEventListener('spot-im-show-more-replies-clicked', function(event) {
    if (window.snowplow) {
      window.snowplow('trackStructEvent', {
        category: 'Comments',
        action: 'Show More Replies Clicked',
      });
    }
  });
  document.addEventListener('spot-im-hover-like-details', function(event) {
    if (window.snowplow) {
      window.snowplow('trackStructEvent', {
        category: 'Comments',
        action: 'List of Likes Opened',
      });
    }
  });
  document.addEventListener('spot-im-user-down-vote-click', function(event) {
    if (window.snowplow) {
      window.snowplow('trackStructEvent', {
        category: 'Comments',
        action: 'Down Vote Clicked',
        property: event.detail.message_type,
      });
    }
  });
  document.addEventListener('spot-im-user-up-vote-click', function(event) {
    if (window.snowplow) {
      window.snowplow('trackStructEvent', {
        category: 'Comments',
        action: 'Up Vote Clicked',
        property: event.detail.message_type,
      });
    }
  });
  document.addEventListener('spot-im-clicked-message-context-menu', function(event) {
    if (window.snowplow) {
      window.snowplow('trackStructEvent', {
        category: 'Comments',
        action: 'Comment Context Menu Opened',
        property: event.detail.message_type,
      });
    }
  });
  document.addEventListener('spot-im-clicked-delete-message', function(event) {
    if (window.snowplow) {
      window.snowplow('trackStructEvent', {
        category: 'Comments',
        action: 'Delete Comment Clicked',
        property: event.detail.message_type,
      });
    }
  });
  document.addEventListener('spot-im-clicked-edit-message', function(event) {
    if (window.snowplow) {
      window.snowplow('trackStructEvent', {
        category: 'Comments',
        action: 'Edit Comment Clicked',
        property: event.detail.message_type,
      });
    }
  });
  document.addEventListener('spot-im-clicked-mute-user', function(event) {
    if (window.snowplow) {
      window.snowplow('trackStructEvent', {
        category: 'Comments',
        action: 'Mute User Clicked',
      });
    }
  });
  document.addEventListener('spot-im-share-type', function(event) {
    if (window.snowplow) {
      window.snowplow('trackStructEvent', {
        category: 'Comments',
        action: 'Share Comment Clicked',
        property: event.detail.message_type,
        label: event.detail.type,
      });
    }
  });
})();