import { mdiTableChair } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableChair(props: IconComponentProps) {
  return <Icon path={mdiTableChair} {...props} />;
}

export { mdiTableChair as path };
