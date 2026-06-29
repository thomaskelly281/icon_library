import { mdiElephant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Elephant(props: IconComponentProps) {
  return <Icon path={mdiElephant} {...props} />;
}

export { mdiElephant as path };
