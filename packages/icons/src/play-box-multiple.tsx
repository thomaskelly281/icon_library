import { mdiPlayBoxMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlayBoxMultiple(props: IconComponentProps) {
  return <Icon path={mdiPlayBoxMultiple} {...props} />;
}

export { mdiPlayBoxMultiple as path };
