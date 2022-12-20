export default function pick(obj, arr) {
  // eslint-disable-next-line
  return arr.reduce((acc, record) => (record in obj && (acc[record] = obj[record]), acc), {});
}
