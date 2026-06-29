import { mdiCarrot } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Carrot(props: IconComponentProps) {
  return <Icon path={mdiCarrot} {...props} />;
}

export { mdiCarrot as path };
