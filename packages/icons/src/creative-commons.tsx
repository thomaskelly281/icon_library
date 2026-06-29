import { mdiCreativeCommons } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CreativeCommons(props: IconComponentProps) {
  return <Icon path={mdiCreativeCommons} {...props} />;
}

export { mdiCreativeCommons as path };
