import VConsole from 'vconsole';
let vconsole = ''
if (["development", "testing"].includes(process.env.NODE_ENV)) {
  vconsole = new VConsole();
}
// vconsole = new VConsole();
export default vconsole;
