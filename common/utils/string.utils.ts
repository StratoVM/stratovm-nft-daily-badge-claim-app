export const formatNumericString = (value: string): string => {
  return value.replace(/[^0-9.]/g, "").replace(/(\..*?)\..*/g, "$1");
};
