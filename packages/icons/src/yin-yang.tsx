import { mdiYinYang } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function YinYang(props: IconComponentProps) {
  return <Icon path={mdiYinYang} {...props} />;
}

export { mdiYinYang as path };
