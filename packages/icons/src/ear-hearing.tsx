import { mdiEarHearing } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EarHearing(props: IconComponentProps) {
  return <Icon path={mdiEarHearing} {...props} />;
}

export { mdiEarHearing as path };
