import { mdiSeedPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SeedPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiSeedPlusOutline} {...props} />;
}

export { mdiSeedPlusOutline as path };
