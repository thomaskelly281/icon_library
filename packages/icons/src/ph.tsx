import { mdiPh } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Ph(props: IconComponentProps) {
  return <Icon path={mdiPh} {...props} />;
}

export { mdiPh as path };
