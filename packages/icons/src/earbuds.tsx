import { mdiEarbuds } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Earbuds(props: IconComponentProps) {
  return <Icon path={mdiEarbuds} {...props} />;
}

export { mdiEarbuds as path };
