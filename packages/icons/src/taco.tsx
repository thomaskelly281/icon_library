import { mdiTaco } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Taco(props: IconComponentProps) {
  return <Icon path={mdiTaco} {...props} />;
}

export { mdiTaco as path };
