export const truncate = (text: string) => {
    if (text?.length > 14) {
      const newText = `${text.substring(0, 5)}...${text.substring(
        text.length - 5,
        text.length
      )}`;
      return newText;
    }
    return text;
  };