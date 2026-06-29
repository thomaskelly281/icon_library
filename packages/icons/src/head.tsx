import { mdiHead } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Head(props: IconComponentProps) {
  return <Icon path={mdiHead} {...props} />;
}

export { mdiHead as path };
