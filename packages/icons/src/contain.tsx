import { mdiContain } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Contain(props: IconComponentProps) {
  return <Icon path={mdiContain} {...props} />;
}

export { mdiContain as path };
