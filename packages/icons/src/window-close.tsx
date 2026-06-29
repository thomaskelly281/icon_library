import { mdiWindowClose } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WindowClose(props: IconComponentProps) {
  return <Icon path={mdiWindowClose} {...props} />;
}

export { mdiWindowClose as path };
