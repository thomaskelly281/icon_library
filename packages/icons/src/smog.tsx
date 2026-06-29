import { mdiSmog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Smog(props: IconComponentProps) {
  return <Icon path={mdiSmog} {...props} />;
}

export { mdiSmog as path };
