import { mdiViewModuleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewModuleOutline(props: IconComponentProps) {
  return <Icon path={mdiViewModuleOutline} {...props} />;
}

export { mdiViewModuleOutline as path };
