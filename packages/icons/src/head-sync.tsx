import { mdiHeadSync } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadSync(props: IconComponentProps) {
  return <Icon path={mdiHeadSync} {...props} />;
}

export { mdiHeadSync as path };
