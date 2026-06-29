import { mdiLoading } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Loading(props: IconComponentProps) {
  return <Icon path={mdiLoading} {...props} />;
}

export { mdiLoading as path };
