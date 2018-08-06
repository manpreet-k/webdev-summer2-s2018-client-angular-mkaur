export class WidgetServiceClient {

  findWidgetsForTopic(topicId) {
    return fetch
    ('https://webdev-summer2-2018-mkaur.herokuapp.com/api/topic/' + topicId + '/widget')
      .then(response => response.json());
  }

}
