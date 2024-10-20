
export const getTimeAgo = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();

  // Calculate the difference in milliseconds
  const diffInMs = now.getTime() - date.getTime();

  // Calculate the different time intervals
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInMonths = Math.floor(diffInDays / 30); 
  const diffInYears = Math.floor(diffInDays / 365); 

//   return the time ago with character 
  if (diffInSeconds < 60) {
    return `${diffInSeconds} sc`;
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} mn`;
  } else if (diffInHours < 24) {
    return `${diffInHours}h`;
  } else if (diffInDays < 30) {
    return `${diffInDays}d`;
  } else if (diffInMonths < 12) {
    return `${diffInMonths}m`;
  } else {
    return `${diffInYears}y`;
  }
};

