import { mdiAngular } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Angular(props: IconComponentProps) {
  return <Icon path={mdiAngular} {...props} />;
}

export { mdiAngular as path };
