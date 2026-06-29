import { mdiAws } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Aws(props: IconComponentProps) {
  return <Icon path={mdiAws} {...props} />;
}

export { mdiAws as path };
