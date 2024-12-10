def enqueue_request_pull_request_reviewers_job(actor: user, should_re_request_reviews: false)
    RequestPullRequestReviewersJob.perform_later(self, actor, should_re_request_reviews: should_re_request_reviews)
  end
