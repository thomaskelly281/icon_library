import { mdiTurkey } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Turkey(props: IconComponentProps) {
  return <Icon path={mdiTurkey} {...props} />;
}

export { mdiTurkey as path };
