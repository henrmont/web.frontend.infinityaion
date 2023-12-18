import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { TopicService } from '../services/topic.service';

export const topicResolve: ResolveFn<any> = (route, state) => {
  return inject(TopicService).getTopic(route.paramMap.get('id'));
};
