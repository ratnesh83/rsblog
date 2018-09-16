import { BlogContentModule } from './blog-content.module';

describe('BlogContentModule', () => {
  let blogContentModule: BlogContentModule;

  beforeEach(() => {
    blogContentModule = new BlogContentModule();
  });

  it('should create an instance', () => {
    expect(blogContentModule).toBeTruthy();
  });
});
