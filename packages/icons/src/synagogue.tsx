import { mdiSynagogue } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Synagogue(props: IconComponentProps) {
  return <Icon path={mdiSynagogue} {...props} />;
}

export { mdiSynagogue as path };
