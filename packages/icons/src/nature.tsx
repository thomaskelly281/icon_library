import { mdiNature } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Nature(props: IconComponentProps) {
  return <Icon path={mdiNature} {...props} />;
}

export { mdiNature as path };
