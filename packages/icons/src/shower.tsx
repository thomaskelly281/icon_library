import { mdiShower } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Shower(props: IconComponentProps) {
  return <Icon path={mdiShower} {...props} />;
}

export { mdiShower as path };
