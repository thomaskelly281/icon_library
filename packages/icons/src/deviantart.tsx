import { mdiDeviantart } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Deviantart(props: IconComponentProps) {
  return <Icon path={mdiDeviantart} {...props} />;
}

export { mdiDeviantart as path };
