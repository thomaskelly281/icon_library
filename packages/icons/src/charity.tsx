import { mdiCharity } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Charity(props: IconComponentProps) {
  return <Icon path={mdiCharity} {...props} />;
}

export { mdiCharity as path };
