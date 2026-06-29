import { mdiAllInclusiveBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AllInclusiveBox(props: IconComponentProps) {
  return <Icon path={mdiAllInclusiveBox} {...props} />;
}

export { mdiAllInclusiveBox as path };
