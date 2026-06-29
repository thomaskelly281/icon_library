import { mdiGreenhouse } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Greenhouse(props: IconComponentProps) {
  return <Icon path={mdiGreenhouse} {...props} />;
}

export { mdiGreenhouse as path };
