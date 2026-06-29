import { mdiPostageStamp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PostageStamp(props: IconComponentProps) {
  return <Icon path={mdiPostageStamp} {...props} />;
}

export { mdiPostageStamp as path };
