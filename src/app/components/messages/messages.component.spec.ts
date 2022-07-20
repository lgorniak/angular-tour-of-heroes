import { MessagesComponent } from './messages.component';
import { MessageService } from '../../services/messages/message.service';

describe('MessagesComponent', () => {
  let component: MessagesComponent;

  beforeEach(async () => {
    const messageSpyService = jasmine.createSpyObj<MessageService>(['add']);
    messageSpyService.add;

    component = new MessagesComponent(messageSpyService);
    component.ngOnInit;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
