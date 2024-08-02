/**
 * Formats the given address string to a shorter version.
 * @param address - Web3 address.
 * @returns A shorter version of the address.
 */
export const shortenAddress = (address: string) => {
  return `${address.slice(0, 5)}...${address.slice(
    address.length - 3,
    address.length,
  )}`;
};
