import { BlogListModule } from './blog-list.module';

describe('BlogListModule', () => {
  let blogListModule: BlogListModule;

  beforeEach(() => {
    blogListModule = new BlogListModule();
  });

  it('should create an instance', () => {
    expect(blogListModule).toBeTruthy();
  });
});
