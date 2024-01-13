function checkPullRequestApproval(latestCommitTimestamp, reviews) {
    const approvalReviews = reviews.filter((review) =>
        review.reviewType === "APPROVAL" && review.timestamp >= latestCommitTimestamp
    );
    const differentUsers = {};
    for (let i = 0; i < approvalReviews.length; i++) {
        const review = approvalReviews[i];
    
        if (!differentUsers[review.userId]) {
            differentUsers[review.userId] = true;
        }
      }
    
      return Object.keys(differentUsers).length >= 2;
}

  const latestCommitTimestamp = Date.now();
  const reviews = [
    { userId: "user1", timestamp: Date.now() - 1000, reviewType: "APPROVAL" },
    { userId: "user2", timestamp: Date.now() + 10, reviewType: "COMMENT" },
    { userId: "user1", timestamp: Date.now() + 10, reviewType: "APPROVAL" },
    { userId: "user2", timestamp: Date.now() + 20, reviewType: "COMMENT" },
    { userId: "user1", timestamp: Date.now() + 30, reviewType: "APPROVAL" },
    { userId: "user3", timestamp: Date.now() + 35, reviewType: "APPROVAL" },
  ];
  
checkPullRequestApproval(latestCommitTimestamp, reviews);
console.log(result);
  
  