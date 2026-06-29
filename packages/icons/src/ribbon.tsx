import { mdiRibbon } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Ribbon(props: IconComponentProps) {
  return <Icon path={mdiRibbon} {...props} />;
}

export { mdiRibbon as path };
