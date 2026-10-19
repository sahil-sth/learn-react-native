import clsx from "clsx";
import { Image, Pressable, Text, View } from "react-native";
import { formatCurrency, formatSubscriptionDateTime } from "../lib/utils";

const SubscriptionCard = ({
  name,
  price,
  currency,
  icon,
  billing,
  category,
  color,
  plan,
  renewalDate,
  onPress,
  expanded,
}: SubscriptionCardProps) => {
  return (
    <Pressable
      onPress={onPress}
      className={clsx("sub-card", expanded ? "sub-card-expanded" : "bg-card")}
      style={!expanded && color ? { backgroundColor: color } : undefined}
    >
      <View className="sub-head">
        <View className="sub-main">
          <Image source={icon} className="sub-icon" />
          <View className="sub-copy">
            <Text numberOfLines={1} className="sub-title">
              {name}
            </Text>
            <Text numberOfLines={1} ellipsizeMode="tail" className="sub-meta">
              {category?.trim() ||
                plan?.trim() ||
                (renewalDate ? formatSubscriptionDateTime(renewalDate) : "")}
            </Text>
          </View>
        </View>
        <View className="sub-price-box">
          <Text className="sub-price">{formatCurrency(price, currency)}</Text>
          <Text className="sub-billing">{billing}</Text>
        </View>
      </View>
      {expanded && (
        <View className="sub-bdy">
          <Text className="sub-expanded-text">
            Subscription details go here...
          </Text>
        </View>
      )}
    </Pressable>
  );
};

export default SubscriptionCard;
