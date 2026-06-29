import { mdiShieldSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShieldSearch(props: IconComponentProps) {
  return <Icon path={mdiShieldSearch} {...props} />;
}

export { mdiShieldSearch as path };
