import { mdiHexagonMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HexagonMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiHexagonMultipleOutline} {...props} />;
}

export { mdiHexagonMultipleOutline as path };
