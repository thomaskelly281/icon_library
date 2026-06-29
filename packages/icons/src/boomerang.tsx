import { mdiBoomerang } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Boomerang(props: IconComponentProps) {
  return <Icon path={mdiBoomerang} {...props} />;
}

export { mdiBoomerang as path };
